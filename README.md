# Python Pocket Lab

Interactive Python dictionary and practical learning application by Glitchout-Co.

**Version 0.3.1 — official Glitchout-Co branding**

A mobile-friendly static web app for learning Python at your own pace. No account or backend required.

## Features

- 59 searchable dictionary entries: keywords, soft keywords, built-ins and other concepts.
- Python 3.13 and 3.15 reference modes and comparison.
- 21 puzzles (20 in Python 3.13 mode), across debugging, building functions, project challenges, output prediction, missing code, optimisation and explanations.
- Mixed beginner, intermediate and advanced difficulty; filter by topic, project and puzzle type or choose a random challenge.
- Local bookmarks and progress, optional code runner, hints and reference solutions.
- Glitchout-Co charcoal/blue design, system/dark/light theme selection, responsive navigation and learning overview.

## Run locally

Open `index.html` in a desktop browser for the dictionary. For reliable service worker and web app installation support, use HTTPS hosting or localhost. For local development, run `python -m http.server 8000` from this folder and visit http://localhost:8000/.

## Publish using GitHub Pages

1. In this repository, open Settings > Pages.
2. Under Build and deployment select Deploy from a branch.
3. Select `Master` and `/ (root)`, then Save.
4. Open the published URL reported by GitHub.
5. On iPhone, use Safari > Share > Add to Home Screen; enable Open as Web App if offered. On Android use Chrome's install/add to home screen option.

The dictionary, bookmarks, progress and non-execution puzzles work offline once the service worker has cached the hosted files. Online execution uses Pyodide (Python 3.14), not the selected reference version. Python 3.15-only syntax is reference-only; 3.15 material may change before or between releases. Internet access is needed to fetch the runtime, and offline runtime caching is not guaranteed. The worker has a timeout and does not support interactive stdin or desktop GUI packages. Tests are illustrative, not exhaustive; optimisation tests usually check behaviour rather than complexity. Progress is saved locally when browser storage is available. Never enter secrets or run untrusted code.

## References and rights

- [Python 3.13 language reference](https://docs.python.org/3.13/reference/lexical_analysis.html)
- [Python 3.15 language reference](https://docs.python.org/3.15/reference/lexical_analysis.html)
- [Python 3.15 changes](https://docs.python.org/3.15/whatsnew/3.15.html)
- [Pyodide](https://pyodide.org/)
- [Third-party notices](THIRD_PARTY_NOTICES.md) and [disclaimer](DISCLAIMER.md)

No open-source licence has been selected for the original application. Third-party components retain their own licences. Public availability does not itself grant unrestricted reuse rights; GitHub's terms also apply.

See [CHANGELOG.md](CHANGELOG.md) for version history.
