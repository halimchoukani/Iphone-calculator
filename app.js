const btns = document.getElementsByClassName("btn");
const result_input = document.querySelector("input");
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", () => {
    x = btn.dataset.num;
    op = "";
    if (x != "del" && x != "=" && x != "-1") {
      if (result_input.value == "0") {
        result_input.value = x;
      } else {
        result_input.value += x;
      }
    } else {
      if (x == "del") {
        result_input.value = 0;
      } else {
        if (x == "=") {
          op = result_input.value;
          result_input.value = eval(op);
        } else {
          result_input.value = -result_input.value;
        }
      }
    }
  });
});
