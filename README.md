# repositorio de compose de base de datos Docker

## GIT
Comands commit y amend
```bash
  git commit --amend -m "Nuevo mensaje del commit"

  git add archivo-que-olvide.txt
  git commit --amend

  git reset HEAD archivo-que-no-debia-estar.txt
  git commit --amend

  git commit --amend -m "Mensaje corregido para el último commit"
  git push origin main --force

  # git push origin main --force           # Riesgo de Reescribir Historial Compartido
  git push origin main --force-with-lease  #Git verificará que nadie más haya empujado cambios al branch remoto antes de sobrescribirl
```
Comands Meerge
```bash
  #  Si hay conflictos, resuélvelos primero en los archivos afectados, luego añade los cambios
  git add <archivos-resueltos>
  git merge --continue

  # Abortar el Merge:
  git merge --abort
```