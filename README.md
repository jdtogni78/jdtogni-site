# jdtogni.dev — personal site

Plain static HTML — **no build step, no toolchain.** Deploys to Cloudflare Pages
as-is.

```
index.html       personal hub (/)
dstrader.html    DS Trader project page (also served at /dstrader)
familyfund.html  FamilyFund project page (also served at /familyfund)
style.css        shared styles
_headers         Cloudflare security headers
```

## Preview locally

Double-click `index.html`, or for clean cross-page navigation:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (Cloudflare Pages)

1. Cloudflare dash → **Workers & Pages → Create → Pages → Connect to Git**, pick
   this repo.
2. Framework preset: **None**. Build command: *(empty)*. Output dir: `/`.
3. Add the custom domain **jdtogni.dev** (free SSL is provisioned automatically).

`/dstrader` and `/familyfund` clean URLs work automatically — Cloudflare serves
`dstrader.html` at both `/dstrader.html` and `/dstrader`.

## Notes

- GitHub links currently point to the profile; they'll point at the individual
  project repos once those are public.
- Add a `resume.pdf` to this folder and a LinkedIn link in the page footers when
  ready.
