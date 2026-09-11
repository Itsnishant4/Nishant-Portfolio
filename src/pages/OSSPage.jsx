import { useState, useEffect, useCallback } from 'react';
import { LINKS } from '../data.js';
import usePageMeta from '../hooks/usePageMeta.js';

/* ─── Live GitHub data for the portfolio owner, grouped by repo owner ─── */
const GITHUB_USER = 'Itsnishant4';

/* Group parsed search items by repository owner (user/org) */
function groupByOwner(parsedItems) {
    const map = new Map();
    for (const item of parsedItems) {
        const owner = item.repo.split('/')[0];
        if (!map.has(owner)) {
            map.set(owner, {
                key: owner,
                name: owner,
                handle: owner,
                url: `https://github.com/${owner}`,
                avatar: `https://github.com/${owner}.png`,
                items: [],
            });
        }
        map.get(owner).items.push(item);
    }
    return [...map.values()].sort((a, b) => b.items.length - a.items.length);
}

/* Shown before live data loads / if the API is unreachable */
const FALLBACK_ORGS = [];

/* ─── Icons matching GitHub Primer Exact Styles ─── */
function PRIcon({ status }) {
    if (status === 'merged') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8250df" style={{ flexShrink: 0 }}>
                <path d="M5.45 5.154A4.25 4.25 0 0 0 9.165 7.5h1.585a2.251 2.251 0 1 1 0 1.5H9.165A5.75 5.75 0 0 1 4 4.361V3.75a2.25 2.25 0 1 1 1.45 2.404ZM4.75 3a.75.75 0 1 0 0 1.5A.75.75 0 0 0 4.75 3Zm6.5 6.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                <path d="M12 3.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0Zm-1.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        );
    }
    if (status === 'open') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#1f883d" style={{ flexShrink: 0 }}>
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h.5A3.5 3.5 0 0 1 14 6v6.628a2.251 2.251 0 1 1-1.5 0V6a2 2 0 0 0-2-2h-.5v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#cf222e" style={{ flexShrink: 0 }}>
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
            <path d="M8.22 4.97a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z" />
        </svg>
    );
}

function IssueIcon({ status }) {
    if (status === 'open') {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#1f883d" style={{ flexShrink: 0 }}>
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
            </svg>
        );
    }
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#8250df" style={{ flexShrink: 0 }}>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.03 5.47-3.5 3.5-1.5-1.5a.75.75 0 1 0-1.06 1.06l2.03 2.03a.75.75 0 0 0 1.06 0l4.03-4.03a.75.75 0 1 0-1.06-1.06Z" />
        </svg>
    );
}

function ItemIcon({ type, status }) {
    return type === 'pr' ? <PRIcon status={status} /> : <IssueIcon status={status} />;
}

/* ─── Components ─── */
function OSSRow({ item }) {
    return (
        <div className="oss2-row">
            <div className="oss2-row-icon">
                <ItemIcon type={item.type} status={item.status} />
            </div>
            <a className="oss2-row-title" href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
            </a>
            <a className="oss2-row-repo" href={`https://github.com/${item.repo}`} target="_blank" rel="noopener noreferrer">
                {item.repo}
            </a>
        </div>
    );
}

function OrgBlock({ org, tab }) {
    const filtered = org.items.filter((item) => {
        if (tab === 'all') return true;
        if (tab === 'prs') return item.type === 'pr';
        if (tab === 'issues') return item.type === 'issue';
        return true;
    });

    if (filtered.length === 0) return null;

    const prCount = org.items.filter((i) => i.type === 'pr').length;
    const issueCount = org.items.filter((i) => i.type === 'issue').length;

    let badgeText = '';
    if (tab === 'all') badgeText = `${filtered.length} Contributions (${prCount} PR${prCount !== 1 ? 's' : ''}, ${issueCount} Issue${issueCount !== 1 ? 's' : ''})`;
    if (tab === 'prs') badgeText = `${prCount} Pull Request${prCount !== 1 ? 's' : ''}`;
    if (tab === 'issues') badgeText = `${issueCount} Issue${issueCount !== 1 ? 's' : ''}`;

    return (
        <div className="oss2-org">
            <div className="oss2-org-header">
                <div className="oss2-org-left">
                    <img className="oss2-org-avatar" src={org.avatar} alt={org.name} width={24} height={24} />
                    <a className="oss2-org-name" href={org.url} target="_blank" rel="noopener noreferrer">
                        {org.name}
                    </a>
                </div>
                <span className="oss2-org-badge">{badgeText}</span>
            </div>
            <div className="oss2-rows">
                {filtered.map((item) => (
                    <OSSRow key={item.id || `${item.repo}-${item.number}`} item={item} />
                ))}
            </div>
        </div>
    );
}

function OSSSkeleton() {
    return (
        <div aria-hidden="true">
            {[0, 1].map((b) => (
                <div className="oss2-org" key={b}>
                    <div className="oss2-org-header">
                        <div className="oss2-org-left">
                            <span className="sk sk-avatar" />
                            <span className="sk sk-line" style={{ width: '140px' }} />
                        </div>
                        <span className="sk sk-badge" />
                    </div>
                    <div className="oss2-rows">
                        {[0, 1, 2].map((r) => (
                            <div className="oss2-row" key={r}>
                                <span className="sk sk-icon" />
                                <span className="sk sk-line" style={{ width: `${72 - r * 14}%` }} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <span className="footer-meta">© 2026 Nishant Patel · Rajkot, India</span>
                    <div className="footer-links">
                        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={`mailto:${LINKS.email}`}>Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function OSSPage() {
    usePageMeta({ title: 'Open Source — Nishant Patel', description: 'Open-source contributions by Nishant Patel, synced live from GitHub.', path: '/oss' });
    const [tab, setTab] = useState('all');
    const [orgsData, setOrgsData] = useState(FALLBACK_ORGS);
    const [loading, setLoading] = useState(false);
    const [isLive, setIsLive] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchLiveItems = useCallback(async () => {
        setLoading(true);
        try {
            let allItems = [];
            let page = 1;
            while (page <= 2) {
                const res = await fetch(`https://api.github.com/search/issues?q=author:${GITHUB_USER}&per_page=100&page=${page}`);
                if (!res.ok) throw new Error(`GitHub API ${res.status}`);
                const data = await res.json();
                if (!data.items || data.items.length === 0) break;
                allItems.push(...data.items);
                if (allItems.length >= data.total_count) break;
                page++;
            }

            const parsedItems = allItems.map((item) => {
                const isPR = !!item.pull_request;
                const repo = item.repository_url.replace('https://api.github.com/repos/', '');
                return {
                    id: item.id,
                    type: isPR ? 'pr' : 'issue',
                    number: item.number,
                    title: item.title,
                    repo: repo,
                    url: item.html_url,
                    status: item.state, // refined below for closed PRs
                    created_at: item.created_at,
                };
            });

            // Best-effort: resolve merged vs closed for PRs (capped to spare rate limit)
            const closedPRs = parsedItems.filter((i) => i.type === 'pr' && i.status === 'closed').slice(0, 12);
            await Promise.all(closedPRs.map(async (pr) => {
                try {
                    const r = await fetch(`https://api.github.com/repos/${pr.repo}/pulls/${pr.number}`);
                    if (!r.ok) return;
                    const d = await r.json();
                    pr.status = d.merged_at ? 'merged' : 'closed';
                } catch { /* keep 'closed' */ }
            }));

            setOrgsData(groupByOwner(parsedItems));
            setIsLive(true);
            setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        } catch (err) {
            console.warn('GitHub API live fetch failed, using cached contribution data:', err.message);
            setIsLive(false);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLiveItems();
    }, [fetchLiveItems]);

    // Calculate global totals
    const totalAll = orgsData.reduce((acc, org) => acc + org.items.length, 0);
    const totalPRs = orgsData.reduce((acc, org) => acc + org.items.filter((i) => i.type === 'pr').length, 0);
    const totalIssues = orgsData.reduce((acc, org) => acc + org.items.filter((i) => i.type === 'issue').length, 0);

    const TABS = [
        { key: 'all', label: `All (${totalAll})` },
        { key: 'prs', label: `Pull Requests (${totalPRs})` },
        { key: 'issues', label: `Issues (${totalIssues})` },
    ];

    return (
        <div className="shell">
            <div className="page-content">
                <section className="section">
                    <div className="container">
                        <div className="oss-header-row">
                            <div className="section-title" style={{ marginBottom: 0 }}>Open Source</div>
                            <div className="oss-live-meta">
                                <span className={`oss-live-badge ${isLive ? 'active' : ''}`}>
                                    <span className="live-dot" />
                                    {isLive ? `Live from GitHub ${lastUpdated ? `(${lastUpdated})` : ''}` : 'GitHub Synced'}
                                </span>
                            </div>
                        </div>

                        <div className="oss-pill-tabs" style={{ marginTop: '24px' }}>
                            {TABS.map((t) => (
                                <button
                                    key={t.key}
                                    className={`oss-pill-tab${tab === t.key ? ' active' : ''}`}
                                    onClick={() => setTab(t.key)}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {totalAll === 0 && !loading && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--fg-muted)', marginTop: '24px' }}>
                                No contributions loaded (API limit or empty result). View everything on{' '}
                                <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer">GitHub @{GITHUB_USER}</a>.
                            </p>
                        )}
                        {loading && totalAll === 0 && <OSSSkeleton />}
                        {orgsData.map((org) => (
                            <OrgBlock key={org.key || org.name} org={org} tab={tab} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

