export   function formatCurrency(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}

export   function isAuthenticated() {
  return JSON.parse(localStorage.getItem("user") || "[]") ;
}


export default {isAuthenticated,formatCurrency}