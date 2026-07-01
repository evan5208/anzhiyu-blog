# Source Notes: X MCP Setup Checklist

- X source: https://x.com/punk2898/status/2072222724085469674
- Quoted official source: https://docs.x.com/tools/mcp
- Topic: X MCP is useful for AI agents, but it still requires developer app setup, OAuth/user-context choices, cost awareness, and routing decisions.
- Selected because: it is directly relevant to this site's X-driven automation workflow and not a repeat of the previous iFixAi source.
- Skipped sources this run:
  - Bookmarks: only one trading-strategy discussion, not suitable for the site.
  - Timeline: many short media reposts, trading chatter, or duplicate iFixAi/X Agent sources.

## Extracted Source Text

Punk's post frames three common misconceptions about X MCP:

- It is not truly "no setup"; it is still API-like infrastructure.
- It is not free; cost and package choices still matter.
- It is not always the optimal solution.

The post suggests choosing cheaper third-party data when real time is not required, using Stream filtering when real time matters, and considering lower-latency options for sub-50ms needs.

## Official Documentation Notes

The X documentation says X provides two MCP servers:

- X MCP for API endpoints such as posts, search, users, bookmarks, news, trends, and Articles.
- Docs MCP for searching and reading X API documentation.

The X MCP can be used through a local `xurl mcp` bridge. The bridge handles OAuth and keeps tokens fresh. X also documents two routes:

- App-only bearer: simpler and read-only, with no user context.
- Full xurl bridge: OAuth 2.0 user context, required for writes and account-scoped tools.
