# 📌 Análise e Processamento de Imagens de Satélite no Google Earth Engine  
### Projeto em JavaScript – Pós-Graduação em Ciência de Dados Geoespaciais

Este repositório apresenta um estudo aplicado de manipulação, filtragem e visualização de imagens de satélite utilizando Google Earth Engine (GEE).  
O objetivo foi compreender como trabalhar com coleções de imagens, aplicar filtros espaciais e temporais, classificar cenas por cobertura de nuvens e gerar composições espectrais úteis para análises geoespaciais.

---

## 📂 Código Original
O código completo utilizado no projeto está disponível em:  
https://code.earthengine.google.com/c19408fda763bd92e3e5bcfe2457ba67

---

## 🗺️ 1. Seleção de um ponto no mapa e filtragem inicial  
Foi criado um ponto no mapa (geometria do tipo Point), utilizado como filtro espacial para selecionar imagens da coleção Sentinel.  
Essa primeira filtragem retornou 224 imagens.

(tela1.png)

---

## ⏳ 2. Filtro espacial + filtro temporal  
Além do filtro espacial, aplicou-se um filtro de datas, reduzindo a coleção para 21 imagens disponíveis dentro do intervalo definido.

(tela2.png)

---

## ☁️ 3. Classificação por cobertura de nuvens  
As imagens foram organizadas pela porcentagem de cobertura de nuvens.  
A cena com menor presença de nuvens foi selecionada como a melhor imagem para visualização.

(tela3.png)

---

## 🎨 4. Composição em Cores Verdadeiras (RGB)  
Foi criada uma composição utilizando as bandas tradicionais de cor verdadeira, representando o cenário de forma semelhante ao que o olho humano enxerga.  
Essa composição foi adicionada ao mapa como camada de visualização.

(tela4.png)
---

## 🌱 5. Composição em Falsa Cor (Vegetação)  
Também foi gerada uma composição em falsa cor, usando bandas sensíveis ao infravermelho.  
Essa técnica realça a vegetação, onde áreas mais brilhantes indicam maior vigor vegetativo.

(tela5.png)

---

## 🌍 6. Visualização da Coleção Landsat 8 – Ano Completo  
Como etapa final, foi exibida uma composição global da coleção Landsat 8 referente ao ano de 2016.  
A coleção completa foi mostrada no mapa utilizando os mesmos parâmetros de visualização definidos anteriormente.


---

## 🧠 Principais Aprendizados  
- Seleção e manipulação de coleções de imagens no GEE  
- Aplicação de filtros espacial e temporal  
- Ordenação de imagens por cobertura de nuvens  
- Geração de composições RGB e falsa cor  
- Interpretação de vigor da vegetação  
- Visualização de coleções Landsat completas  

---

## 📁 Arquivos e Telas do Projeto  
- tela1 – Filtro espacial e filtro temporal  
- tela2 – Ordenação por nuvens  
- tela3 – Composição RGB (cores verdadeiras)  
- tela4 – Composição falsa cor  
- tela7 – Visualização da coleção Landsat 8  
- Documento com o código original em JavaScript  

---

## 🛰️ Tecnologias Utilizadas  
- Google Earth Engine  
- Coleções Sentinel e Landsat 8  
- Bandas espectrais e composição de imagens  
- Análise e visualização geoespacial

---

