Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

function Find-XBounds($y) {
    Write-Host "Scanning row y = $y"
    $inTh = $false
    $startX = 0
    for ($x = 330; $x -le 1000; $x++) {
        $c = $img.GetPixel($x, $y)
        $isNonWhite = ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240)
        if ($isNonWhite -and -not $inTh) {
            $inTh = $true
            $startX = $x
        } elseif (-not $isNonWhite -and $inTh) {
            $inTh = $false
            $w = $x - $startX
            if ($w -gt 40) {
                Write-Host "Thumbnail block from x = $startX to x = $x (width = $w)"
            }
        }
    }
}

Find-XBounds 70
Find-XBounds 280

$img.Dispose()
