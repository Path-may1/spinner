let slashes = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r|   ", ]

let i = 100;
for(const slash of slashes){
  setTimeout(() => {    
    process.stdout.write(slash)
  }, i  )
  i += 100
}
setTimeout(() => {
  process.stdout.write('\n')
}, i )
