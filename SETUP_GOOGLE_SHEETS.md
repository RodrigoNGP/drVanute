# Configurar Formulário com Google Sheets

## Passo 1: Configurar Aba "site" na Planilha

1. Abra sua planilha no Google Sheets
2. **Importante**: Certifique-se de que tem uma aba chamada **"site"**
   - Se não tiver, clique com botão direito na aba inferior e crie uma nova aba com esse nome
3. Na aba "site", na célula **A1**, coloque os cabeçalhos:
   - A1: `Data`
   - B1: `Nome`
   - C1: `Email`
   - D1: `Telefone`

## Passo 2: Criar Google Apps Script

1. Na mesma planilha, clique em **Extensões** → **Apps Script**
2. Uma nova aba vai abrir
3. **Apague todo o código padrão**
4. Abra o arquivo `GOOGLE_APPS_SCRIPT.js` neste projeto
5. **Copie TODO o código** dele
6. **Cole** no editor do Google Apps Script
7. Clique em **Salvar** (ícone de disquete)

## Passo 3: Deploy como Web App

1. Clique no botão **Deploy** (canto superior direito)
2. Clique em **New deployment**
3. Clique no ícone de engrenagem → selecione **Web app**
4. Preencha:
   - **Execute as**: [seu email do Google]
   - **Who has access**: Anyone
5. Clique em **Deploy**
6. Uma janela vai aparecer com um aviso de segurança
7. Clique em **Autorizar** ou **Continue** (conforme aparecer)
8. **Copie a URL** que aparecer em "Deployment URL"
   - Exemplo: `https://script.google.com/macros/d/1A2B3C4D5E6F7G8H/userweb`

## Passo 4: Atualizar Contact.tsx

1. Abra o arquivo `components/Contact.tsx`
2. Localize esta linha:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/d/SEU_SCRIPT_ID_AQUI/userweb";
   ```
3. **Substitua** `SEU_SCRIPT_ID_AQUI` pela URL completa do Deploy
4. Exemplo final:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/d/1A2B3C4D5E6F7G8H/userweb";
   ```

## Pronto!

Agora quando alguém preencher o formulário no site, os dados vão aparecer automaticamente na sua planilha do Google Sheets! 

### Testando

1. Acesse `localhost:3000`
2. Preencha o formulário com dados de teste
3. Clique em "Agendar Consulta"
4. Volte para sua planilha do Google Sheets
5. Veja se os dados aparecem em uma nova linha!

### Dica

Se quiser testar o Google Apps Script sem o site:
1. No editor do Apps Script, clique em **Run** (perto do Deploy)
2. Execute a função `testDoPost()`
3. Veja o resultado no console do Apps Script
