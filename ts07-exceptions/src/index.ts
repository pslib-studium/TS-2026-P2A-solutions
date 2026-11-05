const morse: Record<string, string> = {
    a: ".-", b: "-...", c: "-.-.", d: "-..",
    e: ".", f: "..-.", g: "--.", h: "....",
    i: "..", j: ".---", k: "-.-", l: ".-..",
    m: "--", n: "-.", o: "---", p: ".--.",
    q: "--.-", r: ".-.", s: "...", t: "-",
    u: "..-", v: "...-", w: ".--", x: "-..-",
    y: "-.--", z: "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...",
    "8": "---..", "9": "----."
};

function Encode(text: string): string {
    const cleanedText = text
        .normalize("NFD") //rozbití "ě" na "e"+"ˇ"
        .replace(/[\u0300-\u036f]/g, "") // Odstranění diakritiky.
        .toLowerCase()
        //.replace(/[^a-z0-9\s]/g, "")   // Odstranění ostatních znaků.
        .trim();

    if (cleanedText === "") {
        return "";
    }

    let result: string = "";
    for (let word of cleanedText.split(/\s+/)) {
        for (let char of word.split("")) {
            try {
                if (morse[char] === undefined) throw Error("neplatný znak")
                result += morse[char]
            } catch (e) {
                console.error(e);
                result += "?"
            }
        }
    }

    return result;
}

// Ukázka použití v konzoli.
const text = "  Ahoj, světe! 123  ";
const encoded = Encode(text);

console.log("Vstup:     ", text);
console.log("Morseovka: ", encoded);