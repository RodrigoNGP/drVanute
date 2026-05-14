// ===========================================
// GOOGLE APPS SCRIPT PARA FORMULÁRIO
// ===========================================
//
// INSTRUÇÕES:
// 1. Abra sua planilha no Google Sheets
// 2. Clique em "Extensões" → "Apps Script"
// 3. Apague o código padrão
// 4. Cole este script completo
// 5. Clique em "Salvar"
// 6. Clique em "Deploy" → "New deployment"
// 7. Selecione Type: "Web app"
// 8. Execute as: [seu email]
// 9. Who has access: "Anyone"
// 10. Copie a URL gerada
// 11. Cole a URL em Contact.tsx na variável GOOGLE_APPS_SCRIPT_URL
//
// ===========================================

function doPost(e) {
  try {
    // Pega a planilha ativa
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    // Pega a aba chamada "site"
    const sheet = spreadsheet.getSheetByName("site");

    if (!sheet) {
      throw new Error("Aba 'site' não encontrada. Crie uma aba com esse nome na planilha.");
    }

    // Recebe os dados do formulário
    const data = JSON.parse(e.postData.contents);

    // Adiciona uma nova linha na aba "site" com os dados
    sheet.appendRow([
      new Date().toLocaleString('pt-BR'),  // Data e hora no formato brasileiro
      data.name || '',                      // Nome
      data.email || '',                     // Email
      data.phone || ''                      // Telefone
    ]);

    // Retorna sucesso
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Dados salvos com sucesso na aba 'site'"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Retorna erro se algo der errado
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Teste local (opcional)
function testDoPost() {
  const testData = {
    name: "João Silva",
    email: "joao@example.com",
    phone: "(11) 99999-9999"
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
