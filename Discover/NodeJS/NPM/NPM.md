# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__

─ [ ] Verificar se temos o npm instalado `npm -v`
─ [ ] Criar nosso próprio pacote
─ [ ] O que é o arquivo package.json
─ [ ] Utilizar módulos de terceiros
─ [ ] O que é o diretório node_modules
─ [ ] O que é o arquivo package-lock.json
─ [ ] Criar scripts para rodar com o npm
─ [ ] Instalar pacote de maneira global
─ [ ] Desinstalar pacotes
─ [ ] Mudar versão de pacotes

*npm run "script name of .json"* ──> Roda o script via json
*npm root -g* ──> Mostra packages globais
*npm uninstall -g* ──> Desinstala packages globais
*npm outdated* ──> Mostra versões do package
*npm i moment@latest* ──> Instala a última versão do package
*npm upgrade* ──> Instala a versão mais procurada(wanted)
{
* "moment": "^2.29.1"
─────────────────────────────────────────────────────────
*major* = versão do projeto, pode quebrar o projeto
*minor* = alterações que não quebram o projeto
*patch* = correção de bugs ...
────────────────────────────────────────────────────────
_major = 2_
_minor = 29_
_patch = 1_
────────────────────────────────────────────────────────
_^ = indica alterações no minor e patch ao usar npm update_
_~ = indica alterações apenas no patch ao usar npm update_
_* = indica alteração completa no projeto_
   = não ocorrerá mudanças no moment

}