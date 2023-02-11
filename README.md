### Hexlet tests and linter status:
[![Actions Status](https://github.com/YadaDelta/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/YadaDelta/frontend-project-46/actions)
[![Lint and Test](https://github.com/YadaDelta/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/YadaDelta/frontend-project-46/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/90b34ba67237ddb3cb00/maintainability)](https://codeclimate.com/github/YadaDelta/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/90b34ba67237ddb3cb00/test_coverage)](https://codeclimate.com/github/YadaDelta/frontend-project-46/test_coverage)

## This is a CLI utility tool capable of finding difference between two files.
#### Requirements:
* Unix-like system
* Node.js v13+

#### Info:
* Supports .json, .yaml and .yml file formats
* Supports absolute and relative paths
* Can output difference in "stylish", "plain" or "json" formats

### Commands
#### Installation:
```
git clone https://github.com/YadaDelta/frontend-project-46
cd frontend-project-46
make install
npm link
```
#### Instruction:
```
Usage: gendiff [options] <filepath1> <filepath2>                                                
                                                                                                
Compares two configuration files and shows a difference.                                        
                                                                                                
Options:                                                                                        
  -V, --version        output the version number                                                
  -f, --format <type>  output format                                                            
  -h, --help           display help for command                                                 
```

## Examples:
### Finding difference between flat JSON files.
[![asciicast](https://asciinema.org/a/nPzvWnvxLr2P1vG1LmrxmdnVn.svg)](https://asciinema.org/a/nPzvWnvxLr2P1vG1LmrxmdnVn)
### Finding difference between flat YAML files.
[![asciicast](https://asciinema.org/a/WEt6IP53tcFUQEYTnhiUfx4sI.svg)](https://asciinema.org/a/WEt6IP53tcFUQEYTnhiUfx4sI)
### Finding difference between nested files in "stylish" format.
[![asciicast](https://asciinema.org/a/YMabxlBmdDjdLxaU5s9ksXhDg.svg)](https://asciinema.org/a/YMabxlBmdDjdLxaU5s9ksXhDg)
### Finding difference between nested files in "plain" format.
[![asciicast](https://asciinema.org/a/iP9ohWfFw5GqJPy2j9AYPct2c.svg)](https://asciinema.org/a/iP9ohWfFw5GqJPy2j9AYPct2c)
### Finding difference between nested files in "JSON" format.
[![asciicast](https://asciinema.org/a/2cIvgd6SLPGn5RIS9VLmcqKWx.svg)](https://asciinema.org/a/2cIvgd6SLPGn5RIS9VLmcqKWx)
