<!DOCTYPE html>
<html lang="bg">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Прибиращи се кутийки (акордеон)</title>
</head>

<body>
    <header>
        <h2 class="text-2xl text-semibold text-center my-10">Акордеон с Web Components</h2>
    </header>

    <main>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-5">
            <custom-accordion>
                <accordion-item header="Заглавие 1">
                    <p>Това е съдържанието за първата секция.</p>
                </accordion-item>
                <accordion-item header="Заглавие 2">
                    <p>Това е съдържанието за втората секция.</p>
                </accordion-item>
                <accordion-item header="Заглавие 3">
                    <p>Това е съдържанието за третата секция.</p>
                </accordion-item>
            </custom-accordion>
        </div>
    </main>

    <script src="/accordion.js"></script>
</body>

</html>