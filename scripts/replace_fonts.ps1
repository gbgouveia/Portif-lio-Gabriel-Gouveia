$files = Get-ChildItem -Path "src" -Recurse -Include "*.css","*.jsx","*.tsx"
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw -Encoding UTF8
    $c = $c -replace [regex]::Escape("'BBH Bartle', 'Outfit', sans-serif"), "'Rubik', sans-serif"
    $c = $c -replace [regex]::Escape("'BBH Bartle', 'Space Grotesk', sans-serif"), "'Rubik', sans-serif"
    $c = $c -replace [regex]::Escape("'BBH Bartle', monospace"), "'Rubik', sans-serif"
    $c = $c -replace [regex]::Escape("'BBH Bartle'"), "'Rubik'"
    $c | Set-Content $f.FullName -Encoding UTF8 -NoNewline
}
Write-Host "Done replacing fonts in $($files.Count) files"
