let i = 1;

function func() {
  console.log(i);
  i++;
  if (i <= 10) {
    func(); // функция вызывает саму себя
  }
}

func();
