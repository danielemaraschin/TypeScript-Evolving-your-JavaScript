let exp = /<script>[\s\S]*?<\/script>/
let resultado = "<p>regEX test</p><script> alert('oi')</script>".replace(exp, "");

console.log(resultado);

