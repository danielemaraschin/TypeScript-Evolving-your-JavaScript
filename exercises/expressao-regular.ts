let exp = /<script>[\s\S]*?<\/script>/
var teste = "<script> alert("oi")</script>";
var replace = teste.replace(exp, "")