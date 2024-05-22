

<script>
    function fetchData() {
        fetch('https://blynk.cloud/external/api/getAll?token=Jc9_5CpG1Mb3WavmrwJ7fX8Cy5wb0s-6')
        .then(response => response.json())
        .then(data => {
            document.getElementById('Temperature').innerText = `Value 0: ${data.v0}`;
            document.getElementById('Humidity').innerText = `Value 1: ${data.v1}`;
            document.getElementById('Illumination').innerText = `Value 2: ${data.v2}`;
        })
        .catch(error => console.error('Error fetching API:', error))
    }

    {/* // Fetch data initially */}
    fetchData();

    {/* // Refresh data every 100 milliseconds */}
    setInterval(fetchData, 100);
</script>