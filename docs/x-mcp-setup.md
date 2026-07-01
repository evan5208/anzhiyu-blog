# X MCP Setup

This project uses the official X MCP server through `xurl`.

The MCP bridge is:

```bash
npx -y @xdevplatform/xurl mcp https://api.x.com/mcp
```

## Current Status

- X app: `2070462424805703681DevEvandev1`.
- Local `xurl` app name: `aorino-x-mcp`.
- OAuth 2.0 callback URI includes `http://localhost:8080/callback`.
- `xurl` OAuth2 user: `DevEvandev1038`.
- Codex MCP server name: `xapi`.
- Client Secret is stored only in local `xurl` auth storage. Do not commit or print it.

## Required X App Settings

Open the app settings in X Developer Console and ensure:

- OAuth 2.0 is enabled.
- Callback URI / Redirect URL includes:

```text
http://localhost:8080/callback
```

- Permissions should be at least read access. Use read/write only if posting back to X is needed.

## Register The App With xurl

If the local auth store must be recreated, register the app locally:

```bash
npx -y @xdevplatform/xurl auth apps add aorino-x-mcp \
  --client-id "$X_CLIENT_ID" \
  --client-secret "$X_CLIENT_SECRET" \
  --redirect-uri "http://localhost:8080/callback"
```

Authenticate once:

```bash
npx -y @xdevplatform/xurl auth oauth2 --app aorino-x-mcp
npx -y @xdevplatform/xurl auth default aorino-x-mcp DevEvandev1038
npx -y @xdevplatform/xurl whoami
```

## Codex MCP Config

`~/.codex/config.toml` should contain:

```toml
[mcp_servers.xapi]
command = "npx"
args = ["-y", "@xdevplatform/xurl", "mcp", "https://api.x.com/mcp", "--app", "aorino-x-mcp"]
startup_timeout_sec = 120
```

Restart Codex after editing MCP config. Verify with an MCP `tools/list` handshake or by calling `get_users_me`.

## Content Sources

Use these X sources for the blog automation:

- Bookmarks: durable recommendations worth saving.
- Likes: fast signal, needs stronger filtering.
- Home timeline: discovery source, never publish directly.
- Lists: best source once curated personal recommendation lists exist.

The publishing flow should always be:

1. Pull X items.
2. Deduplicate and score.
3. Generate a draft in `source/_drafts`.
4. Rewrite into an article using the editorial style guide.
5. Generate a cover image.
6. Build locally.
7. Review before publishing.
