# Node.js basics

## Use Node.js v 18.12.1

https://docs.rs.school/#/git-convention

https://docs.app.rs.school/#/platform/git-convention

Have not any external tools/libraries as dependencies

## Subtasks

### File system (src/fs)

Implemented several functions in dedicated files

- `create.js` - implemented function that creates new file `fresh.txt` with content `I am fresh and young` inside of the `files` folder (if file already exists `Error` with message `FS operation failed` must be thrown)
- `copy.js` - implemented function that copies folder `files` files with all its content into folder `files_copy` at the same level (if `files` folder doesn't exists or `files_copy` has already been created `Error` with message `FS operation failed` must be thrown)
- `rename.js` - implemented function that renames file `wrongFilename.txt` to `properFilename` with extension `.md` (if there's no file `wrongFilename.txt` or `properFilename.md` already exists `Error` with message `FS operation failed` must be thrown)
- `delete.js` - implemented function that deletes file `fileToRemove.txt` (if there's no file `fileToRemove.txt` `Error` with message `FS operation failed` must be thrown)
- `list.js` - implemented function that prints all array of filenames from `files` folder into console (if `files` folder doesn't exists `Error` with message `FS operation failed` must be thrown)
- `read.js` - implemented function that prints content of the `fileToRead.txt` into console (if there's no file `fileToRead.txt` `Error` with message `FS operation failed` must be thrown)

### Command line interface(src/cli)

Implemented several functions in dedicated files

- `env.js` - implemented function that parses environment variables with prefix `RSS_` and prints them to the console in the format `RSS_name1=value1; RSS_name2=value2`
- `args.js` - implemented function that parses command line arguments (in format `--propName value --prop2Name value2`, not validateed) and prints them to the console in the format `propName is value, prop2Name is value2`

### Modules(src/modules)

Refactored file (added additional imports)

- `cjsToEsm.cjs` - rewrited it to it's equivalent in ECMAScript notation (and renamed it to `esm.mjs`)

### Hash (src/hash)

Implemented several functions in dedicated files

- `calcHash.js` - implemented function that calculates SHA256 hash for file `fileToCalculateHashFor.txt` and logs it into console as `hex`

### Streams (src/streams)

Implemented several functions in dedicated files

- `read.js` - implemented function that reads file `fileToRead.txt` content using Readable Stream and prints it's content into `process.stdout`
- `write.js` - implemented function that writes `process.stdin` data into file `fileToWrite.txt` content using Writable Stream
- `transform.js` - implemented function that reads data from `process.stdin`, reverses text using Transform Stream and then writes it into `process.stdout`

### Zlib (src/zip)

Implemented several functions in dedicated files

- `compress.js` - implemented function that compresses file `fileToCompress.txt` to `archive.gz` using `zlib` and Streams API
- `decompress.js` - implemented function that decompresses `archive.gz` back to the `fileToCompress.txt` with same content as before compression using `zlib` and Streams API

### Worker Threads (src/wt)

Implemented several functions in dedicated files

- `worker.js` - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
- `main.js` - implemented function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file `worker.js` and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from `10` to each `worker`. For example: on host machine with **4** cores you should create **4** workers and send **10** to first `worker`, **11** to second `worker`, **12** to third `worker`, **13** to fourth `worker`. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
  - `status` - `'resolved'` in case of successfully received value from `worker` or `'error'` in case of error in `worker`
  - `data` - value from `worker` in case of success or `null` in case of error in worker

The results in the array are in the same order that the workers were created

### Child Processes (src/cp)

Implemented several functions in dedicated files

- `cp.js` - implemented function `spawnChildProcess` that receives array of arguments `args` and creates child process from file `script.js`, passing these `args` to it. This function should create IPC-channel between `stdin` and `stdout` of master process and child process:
  - child process `stdin` receive input from master process `stdin`
  - child process `stdout` send data to master process `stdout`
