function que(obj) {
  const x = document.getElementsByClassName("drpdwn");
  x[0].style.display = "block";
}

function ans(obj) {
  const x = document.getElementsByClassName("drpdwn");
  x[0].style.display = "none";
}

function fall(obj) {
  const x = document.getElementsByClassName("slid1");
  x[0].style.bottom = "0";
  x[0].style.height = "100%";
}

function rise(obj) {
  const x = document.getElementsByClassName("slid1");
  x[0].style.bottom = "100%";
  x[0].style.height = "0";
}

function fall1(obj) {
  const x = document.getElementsByClassName("slid1");
  x[1].style.bottom = "0";
  x[1].style.height = "100%";
}

function rise1(obj) {
  const x = document.getElementsByClassName("slid1");
  x[1].style.bottom = "100%";
  x[1].style.height = "0";
}

function fall0(obj) {
  const x = document.getElementsByClassName("slid2");
  x[0].style.height = "100%";
}

function rise0(obj) {
  const x = document.getElementsByClassName("slid2");
  x[0].style.height = "0";
}

function fall2(obj) {
  const x = document.getElementsByClassName("slid2");
  x[1].style.height = "100%";
}

function rise2(obj) {
  const x = document.getElementsByClassName("slid2");
  x[1].style.height = "0";
}