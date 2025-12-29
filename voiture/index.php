<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter Voiture</title>
</head>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<body>

<div class="container">
    <div class="card">
        <h2>Ajouter Voiture</h2>

        <form action="ajouter.php" method="post">

            <div class="input-box">
                <input type="text" name="marque" required>
                <label>Marque</label>
            </div>

            <div class="input-box">
                <input type="text" name="modele" required>
                <label>Modèle</label>
            </div>

            <div class="input-box">
                <input type="text" name="couleur" required>
                <label>Couleur</label>
            </div>

            <div class="input-box">
                <input type="number" name="kilometrage" required>
                <label>Kilométrage</label>
            </div>

            <button type="submit">Ajouter</button>

        </form>
    </div>
</div>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    height: 100vh;
    background: linear-gradient(135deg, #1e1e2f, #0f2027);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    perspective: 1000px;
}

.card {
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    border-radius: 20px;
    padding: 40px;
    width: 350px;
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.6s, box-shadow 0.6s;
}

.card:hover {
    transform: rotateY(10deg) rotateX(5deg);
    box-shadow: 0 25px 50px rgba(0,0,0,0.7), 0 0 30px rgba(0,255,255,0.3);
}

@keyframes glassMove {
    0% { transform: rotateY(0deg) rotateX(0deg); }
    50% { transform: rotateY(2deg) rotateX(1deg); }
    100% { transform: rotateY(0deg) rotateX(0deg); }
}

.card {
    animation: glassMove 5s ease-in-out infinite;
}

.card h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    text-shadow: 0 0 5px rgba(0,255,255,0.5);
}

.input-box {
    position: relative;
    margin-bottom: 25px;
}

.input-box input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #aaa;
    color: #fff;
    font-size: 16px;
    outline: none;
}

.input-box label {
    position: absolute;
    top: 10px;
    left: 0;
    color: #aaa;
    pointer-events: none;
    transition: 0.4s;
}

.input-box input:focus + label,
.input-box input:valid + label {
    top: -15px;
    font-size: 12px;
    color: #00ffd5;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 30px;
    background: linear-gradient(135deg, #00ffd5, #00aaff);
    color: #000;
    font-size: 16px;
    cursor: pointer;
    transition: 0.4s, box-shadow 0.4s;
}

button:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0,255,255,0.4);
    
}
</style>

</body>
</html>
