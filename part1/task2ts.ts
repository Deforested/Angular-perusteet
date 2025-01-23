function convertShoeSize(usSize: number): number {
    const offset = 33;
    return usSize + offset
}

console.log(convertShoeSize(8));