import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

import { useState } from "react";

const App = () => {
  let [expressao, setExpressao] = useState("");

  const addNumero = (caracter) => {
    setExpressao((prev) => `${prev}${caracter}`);
  };

  const handleclearNumber = () => {
    setExpressao("");
  };

  function calcular(expression) {
    //tranformar , para .
    expression = expression.replace(/,/g, ".");

    try {
      // eslint-disable-next-line no-eval
      let result = evaluateExpression(expression);
      setExpressao(String(result));
    } catch (error) {
      console.log(String(error));
    }
  }

  function evaluateExpression(expression) {
    // 1. Substituir octais no formato '0...' pelo formato '0o...'
    expression = expression.replace(/\b0([0-9]+)\b/g, "$1");

    // 2. Substituir 'x%' por '(x / 100)' para cálculo de porcentagem
    expression = expression.replace(/([0-9]+)%/g, "($1 / 100)");

    // eslint-disable-next-line no-eval
    return eval(expression);
  }

  //remover ultimo caractere da string
  function removerUltimoCaractere(string) {
    setExpressao(string.slice(0, -1));
  }

  function contemOperadores(str) {
    // Expressão regular para verificar se a string contém +, -, / ou *
    const operadores = /[+\-/*]/;
    return operadores.test(str);
  }

  //função para alterar o valor de negativo para positivo e vice-versa
  function alterarValor(string) {
    if (contemOperadores(string)) {
      if (string.startsWith("-")) {
        setExpressao(string.slice(1));
      }
    } else{
      setExpressao("-" + string);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={expressao} />
        <Row>
          <Button label={"C"} onClick={() => handleclearNumber()} />
          <Button
            label={"DEL"}
            onClick={() => removerUltimoCaractere(expressao)}
          />
          <Button label={"%"} onClick={() => addNumero("%")} />
          <Button label={"/"} onClick={() => addNumero("/")} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => addNumero("7")} />
          <Button label={"8"} onClick={() => addNumero("8")} />
          <Button label={"9"} onClick={() => addNumero("9")} />
          <Button label={"x"} onClick={() => addNumero("*")} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => addNumero("4")} />
          <Button label={"5"} onClick={() => addNumero("5")} />
          <Button label={"6"} onClick={() => addNumero("6")} />
          <Button label={"-"} onClick={() => addNumero("-")} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => addNumero("1")} />
          <Button label={"2"} onClick={() => addNumero("2")} />
          <Button label={"3"} onClick={() => addNumero("3")} />
          <Button label={"+"} onClick={() => addNumero("+")} />
        </Row>
        <Row>
          <Button label={"+/-"} onClick={() => alterarValor(expressao)} />
          <Button label={"0"} onClick={() => addNumero("0")} />
          <Button label={","} onClick={() => addNumero(",")} />
          <Button label={"="} onClick={() => calcular(expressao)} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
