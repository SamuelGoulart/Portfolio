// Este é o service worker "Cópia offline de páginas"

// Adicione o conteúdo abaixo à sua página HTML dentro de uma tag <script type = "module"> </script> ou adicione o arquivo js à sua página no topo para registrar o service worker
// Se você receber um erro sobre a impossibilidade de importar, verifique se você tem type = "module" em sua tag <script />

/*
 Este código usa o componente da web pwa-update https://github.com/pwa-builder/pwa-update para registrar seu service worker,
 avise o usuário quando houver uma atualização disponível e informe-o quando seu PWA estiver pronto para ser usado offline.
*/

import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

const el = document.createElement('pwa-update');
document.body.appendChild(el);
