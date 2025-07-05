# CNN Brasil Website Clone

Clone completo do site CNN Brasil desenvolvido em Flask com design responsivo e funcionalidades interativas.

## Funcionalidades

- **Design Responsivo**: Otimizado para desktop e mobile
- **Vídeo Integrado**: Player do YouTube incorporado
- **Verificação de Seleção**: Sistema interativo para verificar participação no programa MetroFood
- **Interface Autêntica**: Replica fielmente o visual da CNN Brasil

## Tecnologias Utilizadas

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5.3.0
- **Ícones**: Font Awesome 6.4.0
- **Servidor**: Gunicorn

## Deploy no Heroku

### Pré-requisitos

1. Conta no [Heroku](https://heroku.com)
2. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) instalado
3. Git instalado

### Passos para Deploy

1. **Faça login no Heroku**
   ```bash
   heroku login
   ```

2. **Crie uma nova aplicação**
   ```bash
   heroku create nome-da-sua-app
   ```

3. **Configure as variáveis de ambiente** (opcional)
   ```bash
   heroku config:set SESSION_SECRET=sua-chave-secreta-aqui
   ```

4. **Resolva o problema do Git INDEX_LOCKED** (se necessário)
   ```bash
   # Remova o arquivo de lock manualmente
   rm .git/index.lock
   ```

5. **Inicialize o repositório Git** (se ainda não foi feito)
   ```bash
   git init
   git add .
   git commit -m "Fix Python version for uv buildpack"
   ```

6. **Conecte com o Heroku**
   ```bash
   heroku git:remote -a nome-da-sua-app
   ```

7. **Faça o deploy**
   ```bash
   git push heroku main
   ```

8. **Abra sua aplicação**
   ```bash
   heroku open
   ```

### Arquivos de Configuração

- **Procfile**: Define como o Heroku deve executar a aplicação
- **.python-version**: Especifica a versão do Python (para buildpack uv)
- **pyproject.toml**: Lista as dependências do projeto
- **.gitignore**: Arquivos que devem ser ignorados pelo Git

### Resolução de Problemas Comuns

#### Problema: Git INDEX_LOCKED
Se você encontrar o erro "INDEX_LOCKED" ao tentar fazer commit:

1. **Remova o arquivo de lock:**
   ```bash
   rm .git/index.lock
   ```

2. **Tente novamente:**
   ```bash
   git add .
   git commit -m "Fix Python version for uv buildpack"
   ```

#### Problema: runtime.txt não suportado
O Heroku usa o buildpack uv que requer `.python-version` em vez de `runtime.txt`:

1. **Remova o runtime.txt:**
   ```bash
   rm runtime.txt
   ```

2. **Crie .python-version:**
   ```bash
   echo "3.11" > .python-version
   ```

3. **Faça commit das mudanças:**
   ```bash
   git add .
   git commit -m "Fix Python version configuration for uv buildpack"
   ```

### Monitoramento

Para ver os logs da aplicação:
```bash
heroku logs --tail
```

## Estrutura do Projeto

```
├── app.py              # Aplicação Flask principal
├── main.py             # Ponto de entrada
├── Procfile           # Configuração do Heroku
├── runtime.txt        # Versão do Python
├── templates/         # Templates HTML
│   └── index.html     # Página principal
├── static/           # Arquivos estáticos
│   ├── css/         # Estilos CSS
│   ├── js/          # Scripts JavaScript
│   └── images/      # Imagens
└── README.md         # Este arquivo
```

## Desenvolvimento Local

Para rodar localmente:

```bash
python app.py
```

A aplicação estará disponível em `http://localhost:5000`

## Funcionalidades Especiais

### Sistema de Verificação MetroFood

- Botão principal de verificação após o conteúdo
- Botão adicional abaixo do vídeo
- Links integrados no texto da notícia
- Respostas simuladas de status de seleção

### Responsividade

- Layout adaptável para diferentes tamanhos de tela
- Menu hambúrguer para dispositivos móveis
- Vídeo otimizado para visualização mobile
- Tipografia e espaçamentos ajustados

## Suporte

Para problemas relacionados ao deploy ou funcionalidades, consulte a documentação oficial do [Heroku](https://devcenter.heroku.com/) e [Flask](https://flask.palletsprojects.com/).