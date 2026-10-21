Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Card 04 left edge pixels (y=380, x from 300 to 360):"
for ($x = 300; $x -le 360; $x += 5) {
    $c = $img.GetPixel($x, 380)
    Write-Host ('x=' + $x + ': R=' + $c.R + ', G=' + $c.G + ', B=' + $c.B)
}

Write-Host "Businessman back (y=450, x from 280 to 350):"
for ($x = 280; $x -le 350; $x += 5) {
    $c = $img.GetPixel($x, 450)
    Write-Host ('x=' + $x + ': R=' + $c.R + ', G=' + $c.G + ', B=' + $c.B)
}

$img.Dispose()
