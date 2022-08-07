# FileForge
A command-line tool that uses a special mark-up to join and structure content distributed withing multiple files into a single file.

# Installation
1. Use `npm i fileforge` to install it.

# Usage
> Node: Mind the white-space characters.
1. Use `#include fileA.xyz` within the main file.
2. Use `fileforge -f main_file.xyz -o output.xyz` to create a new `output.xyz` file.
3. In `output.xyz` the contents will be similar to `main_file.xyz` but each instance of `#include fileA.xyz` will be replaced by the contents of `fileA.xyz`.

# License
MIT License

Copyright (c) 2022 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

