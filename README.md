/src
  /domain                # Entidades e regras de negócio puras
    /entities            # Ex: User.ts, Prayer.ts
    /repositories        # Interfaces (contratos) de repositórios
    /value-objects       # Tipos ricos (ex: Email, Password)
  
  /application           # Casos de Uso (Orquestram regras de domínio)
    /use-cases           # Ex: CreateUser.ts, GetDailyPrayer.ts
  
  /presentation          # Controladores e Presenters (interface adapter)
    /controllers         # Ex: PrayerController.ts (chama casos de uso)
    /presenters          # Formata dados para os componentes visuais
  
  /infrastructure        # Implementações reais de APIs, DBs, etc.
    /repositories        # Repositórios que acessam APIs, SQLite, etc.
    /services            # Serviços externos (API clients, Storage, etc.)
  
  /ui                    # Camada visual (pura)
    /components          # Componentes visuais reusáveis (Button, Card)
    /screens             # Telas (sem lógica de app, recebem presenters)
    /navigation          # Rotas e navegação (React Navigation, etc.)
  
  /shared                # Utilitários genéricos, helpers, hooks, etc.
    /utils
    /hooks
    /constants
