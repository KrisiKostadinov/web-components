<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customizable Modal with Alpine.js</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="custom-modal.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.x.x/dist/alpine.js" defer></script>
</head>

<body>
    <div x-data="{ open: false }">
        <button x-on:click="open = ! open" class="button">Open Modal</button>

        <custom-modal x-cloak x-show="open" class="modal" screen="medium">
            <div slot="header" class="text-2xl font-semibold bg-slate-100 py-5 px-7">
                Medium Modal Title
            </div>
            <div slot="body" class="mt-4">
                This is a large-sized customizable modal.
            </div>
            <div slot="footer" class="mt-6 text-right">
                <button @click="open = false" class="px-4 py-2 bg-red-500 text-white rounded">Close</button>
            </div>
        </custom-modal>

        <script src="script.js"></script>

    </div>
</body>

</html>
