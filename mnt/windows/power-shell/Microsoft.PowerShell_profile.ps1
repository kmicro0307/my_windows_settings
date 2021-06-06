# PowerShell Core7でもConsoleのデフォルトエンコーディングはsjisなので必要
[System.Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding("utf-8")
[System.Console]::InputEncoding = [System.Text.Encoding]::GetEncoding("utf-8")

# git logなどのマルチバイト文字を表示させるため (絵文字含む)
$env:LESSCHARSET = "utf-8"
# $env:Path = [System.Envirjonment]::GetEnvironmentVariable("Path","User")

# grep
Set-Alias grep rg
Set-Alias which where.exe
# ll
Remove-Alias history
function history() {
  if ($args.Length -eq 0){
    # cat -n (Get-PSReadlineOption).HistorySavePath
    # とりあえず1000行表示
      cat -n (Get-PSReadlineOption).HistorySavePath | tail -n 1000
  } elseif ($args.Length -ne 0){
    # cat -n (Get-PSReadlineOption).HistorySavePath
    cat -n (Get-PSReadlineOption).HistorySavePath | tail -n $args
  }
}

function open() {
  $command_path = "F:\" + "$env:USERNAME" + "\Documents\te210330\TE64.exe"
  if ($args -eq '.'){
    $target = (Convert-Path .)
     Invoke-Expression $command_path" "$target
  } elseif ($args.Length -ne 0){
    Invoke-Expression $command_path" "$args
  } elseif ($args.Length -eq 0){
    Invoke-Expression $command_path" "$HOME
  }
}

# Copy current path
function cpwd() { Convert-Path . | Set-Clipboard }

# git flow
function gf()  { git fetch --all }
function gd()  { git diff $args }
function gds()  { git diff --staged $args }
function ga()  { git add $args }
function gaa() { git add --all }
function gco() { git commit -m $args[0] }

# git switch
function gb()  { git branch -l | rg -v '^\* ' | % { $_ -replace " ", "" } | fzf | % { git switch $_ } }
function gbr() { git branch -rl | rg -v "HEAD|master" | % { $_ -replace "  origin/", "" } | fzf | % { git switch $_ } }
function gbc() { git switch -c $args[0] }
function gbm()  { git branch -l | rg -v '^\* ' | % { $_ -replace " ", "" } | fzf | % { git merge --no-ff $_ } }

# git log
function gls()   { git log -3}
function gll()   { git log -10 --oneline --all --graph --decorate }
function glll()  { git log --graph --all --date=format:'%Y-%m-%d %H:%M' --pretty=format:'%C(auto)%d%Creset\ %C(yellow)%h%Creset %C(magenta)%ae%Creset %C(cyan)%ad%Creset%n%C(white bold)%w(80)%s%Creset%n%b' }
function glls()  { git log --graph --all --date=format:'%Y-%m-%d %H:%M' --pretty=format:'%C(auto)%d%Creset\ %C(yellow)%h%Creset %C(magenta)%ae%Creset %C(cyan)%ad%Creset%n%C(white bold)%w(80)%s%Creset%n%b' -10}

# git status
function gs()  { git status --short }
function gss() { git status -v }

# explorer
function e() { explorer $args }

function ll() { lsd -l --blocks permission --blocks size --blocks date --blocks name --blocks inode $args}

# tree
function tree() { lsd --tree $args}
# Set-Alias ls lsd

# # @ %USERPROFILE%\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
# # Replaced by Unix CoreUtils
# function Replace-Alias($cmd) {
#   Get-Alias $cmd *>1 && Remove-Alias $cmd
# }

# Replace-Alias cat
# Replace-Alias cp
# Replace-Alias echo
# Replace-Alias mv
# Replace-Alias pwd
# Replace-Alias rm
# Replace-Alias ln

# # Call CoreUtils CLI instead of Windows System Commands
# function Call-CoreUtils($cmd) {
#   Set-Variable -name "CoreUtils_$cmd" -value "function $cmd() { $cmd.exe `$args }" -scope global
#   Get-Variable "CoreUtils_$cmd" -ValueOnly | Invoke-Expression
# } 
# プロファイルに追加
#
@"
  arch, base32, base64, basename, cat, cksum, comm, cp, cut, date, df, dircolors, dirname,
  echo, env, expand, expr, factor, false, fmt, fold, hashsum, head, hostname, join, link, ln, ls,
  md5sum, mkdir, mktemp, more, mv, nl, nproc, od, paste, printenv, printf, ptx, pwd,
  readlink, realpath, relpath, rm, rmdir, seq, sha1sum, sha224sum, sha256sum, sha3-224sum,
  sha3-256sum, sha3-384sum, sha3-512sum, sha384sum, sha3sum, sha512sum, shake128sum,
  shake256sum, shred, shuf, sleep, sort, split, sum, sync, tac, tail, tee, test, touch, tr,
  true, truncate, tsort, unexpand, uniq, wc, whoami, yes
"@ -split ',' |
ForEach-Object { $_.trim() } |
Where-Object { ! @('tee', 'sort', 'sleep').Contains($_) } |
ForEach-Object {
    $cmd = $_
    if (Test-Path Alias:$cmd) { Remove-Item -Path Alias:$cmd }
    $fn = '$input | uutils ' + $cmd + ' $args'
    Invoke-Expression "function global:$cmd { $fn }" 
}

