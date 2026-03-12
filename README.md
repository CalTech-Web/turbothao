# Turbo Thao

Next.js 16, React 19, TypeScript, Tailwind CSS 4
Deployed on Vercel: https://turbothao.vercel.app
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/turbothao/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/turbothao/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/turbothao/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/turbothao/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
