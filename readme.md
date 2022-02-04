# Use CLI for Microsoft 365 programmatically

This repo shows how you can use CLI for Microsoft 365 programmatically.

## Minimal Path to Awesome

1. If you have CLI for Microsoft 365 already installed or linked, remove it first
1. Clone https://github.com/waldekmastykarz/cli-microsoft365
1. Switch to the `cli-api` branch
1. Build CLI using `npm run build`
1. Link CLI using `npm link`
1. Clone this repo
1. Link CLI to this project using `npm link @pnp/cli-microsoft365`
1. Run `npm start`

## Known limitations

The currently exposed CLI API circumvents some of the CLI command execution logic, such as displaying help or validating arguments.

## Additional information

If the command fails, the Promise will be rejected with the `error` property containing an object with the error message. If the command succeeds, the Promise will be resolved with the `stdout` property containing the command's output. If you chose to run the command in verbose or debug mode, the additional information will be exposed in the `stderr` property.
