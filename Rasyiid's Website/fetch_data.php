<?php
include 'connect.php';

$sql = "SELECT a.title AS album_title, a.release_date, t.title AS track_title
        FROM albums a 
        JOIN tracks t ON a.album_id = t.album_id 
        WHERE a.artist_id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo '<div class="album">';
        echo '<img src="Foto Album.jpg" alt="Album 1" class="album-cover">';  // Ganti dengan path gambar album yang sesuai
        echo '<div class="album-details">';
        echo '<h4 class="album-title">' . $row["album_title"] . '</h4>';
        echo '<p class="album-year">' . $row["release_date"] . '</p>';
        echo '</div>';
        echo '</div>';
    }
} else {
    echo "<p>No albums found.</p>";
}
$conn->close();
?>
