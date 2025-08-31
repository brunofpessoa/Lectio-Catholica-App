#!/bin/sh

# Esse script:
#   1. Roda o script de importação direto do repositório de dados
#   isso cria o realm_databases no pwd que chamou o script.

DATA_REPO="$HOME/projetos/Lectio Catholica Data"

node "$DATA_REPO/realm/import_bible.js"

