Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# Check pixels at several points on the left
Write-Host "Pixel at (10, 10):" $img.GetPixel(10, 10)
Write-Host "Pixel at (10, 150):" $img.GetPixel(10, 150)
Write-Host "Pixel at (10, 250):" $img.GetPixel(10, 250)
Write-Host "Pixel at (10, 300):" $img.GetPixel(10, 300)
Write-Host "Pixel at (10, 350):" $img.GetPixel(10, 350)
Write-Host "Pixel at (150, 300):" $img.GetPixel(150, 300)
Write-Host "Pixel at (300, 250):" $img.GetPixel(300, 250)

$img.Dispose()
