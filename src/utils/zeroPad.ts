export default function zeroPad(number: number): string {
    const value = ('0' + number).slice(-2)

    return value
}
