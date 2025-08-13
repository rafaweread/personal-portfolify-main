# Arquivos de Produção - Personal Portfolify

## Como usar

### Opção 1: Abrir diretamente no navegador
1. Abra o arquivo `index.html` diretamente no seu navegador
2. O site deve funcionar normalmente com todas as funcionalidades

### Opção 2: Servidor local simples
Se preferir usar um servidor local:

**Com Python:**
```bash
cd dist
python -m http.server 8000
```
Depois acesse: http://localhost:8000

**Com Node.js:**
```bash
cd dist
npx serve
```

**Com PHP:**
```bash
cd dist
php -S localhost:8000
```

## Mudanças realizadas

- **HashRouter**: Substituído o BrowserRouter pelo HashRouter para funcionar sem servidor
- **Base path**: Configurado como `./` para caminhos relativos
- **Rotas**: Todas as rotas agora funcionam com hash (#) no URL

## Estrutura dos arquivos

- `index.html` - Arquivo principal
- `assets/` - Pasta com JavaScript, CSS e imagens
- `404.html` - Página de erro 404
- `robots.txt` - Configurações para crawlers
- `CNAME` - Configuração de domínio personalizado

## Compatibilidade

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Funciona sem servidor web
- ✅ Rotas funcionam com hash routing
- ✅ Todos os componentes e funcionalidades preservados
