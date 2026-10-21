Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# Scan vertically at x=490 (middle of thumbnail 1) to find its top and bottom bounds
# White card background is ~255,255,255. The thumbnail has darker pixels.
Write-Host "Scanning column x=490:"
for ($y = 40; $y -le 160; $y += 2) {
    $c = $img.GetPixel(490, $y)
    if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
        Write-Host "Non-white at y=$y (R=$($c.R), G=$($c.G), B=$($c.B))"
    }
}

# Scan horizontally at found y to find x bounds
# Let's also scan Card 04 thumbnail at x=490, y=200 to 300
Write-Host "Scanning column x=490 for row 2:"
for ($y = 220; $y -le 340; $y += 2) {
    $c = $img.GetPixel(490, $y)
    if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
        Write-Host "Non-white row2 at y=$y (R=$($c.R), G=$($c.G), B=$($c.B))"
    }
}

$img.Dispose()
