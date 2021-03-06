var file    = vu8.load('file'),
    console = vu8.load('console')

var write1 = new file.Writer()
var write2 = new file.Writer("bunko")

console.log("write1 is Writer", file.Writer, write1, (write1 instanceof file.Writer))

if (! write1.open("punko") || ! write2.is_open()) {
    console.log("could not load file for write")
}
else {
    write1.println("hello friend")
    write2.println("hollo frond")
    write1.println("fond of the night")
    write2.println("frond frond of the night")
    write1.close()
    write2.close()
}

if (! file.rename("punko", "newpunko"))
    console.log("could not rename file")

var read1 = new file.Reader("newpunko")
if (! read1.is_open()) {
    console.log("could not load punko for read")
}
else for (var line = read1.getln(); line; line = read1.getln()) {
    console.log("tata",line)
}

var read2 = new file.Reader()
read2.open("bunko")
if (! read2.is_open()) {
    console.log("could not load bunko for read")
}
else for (var line = read2.getln(); line; line = read2.getln()) {
    console.log("papa",line)
}

console.log("exit")
