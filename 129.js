// Перепишите следующий код через switch-case:

let lang = "ru";

if (lang == "ru") {
  console.log("рус");
} else if (lang == "en") {
  console.log("анг");
} else if (lang == "de") {
  console.log("нем");
} else {
  console.log("язык не поддерживается");
}

lang = "en";

switch (lang) {
  case "ru":
    console.log("русский");
    break;
  case "en":
    console.log("английский");
    break;
  case "de":
    console.log("немецкий");
    break;
  default:
    console.log("язык не поддерживается");
}
