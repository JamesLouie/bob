@jameslouie/bob
===============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@jameslouie/bob.svg)](https://npmjs.org/package/@jameslouie/bob)
[![Downloads/week](https://img.shields.io/npm/dw/@jameslouie/bob.svg)](https://npmjs.org/package/@jameslouie/bob)
[![License](https://img.shields.io/npm/l/@jameslouie/bob.svg)](https://github.com/JamesLouie/bob/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @jameslouie/bob
$ bob COMMAND
running command...
$ bob (-v|--version|version)
@jameslouie/bob/0.0.0 win32-x64 node-v14.17.3
$ bob --help [COMMAND]
USAGE
  $ bob COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bob hello [FILE]`](#bob-hello-file)
* [`bob help [COMMAND]`](#bob-help-command)

## `bob hello [FILE]`

describe the command here

```
USAGE
  $ bob hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bob hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/JamesLouie/bob/blob/v0.0.0/src/commands/hello.ts)_

## `bob help [COMMAND]`

display help for bob

```
USAGE
  $ bob help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
