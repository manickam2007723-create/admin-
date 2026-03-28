document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if user has entered real keys
    if (SUPABASE_URL.includes('YOUR_SUPABASE') || !supabase) {
        alert("Wait! You must put your real Supabase URL and Key in supabaseClient.js before adding products.");
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Saving...";

    const newProduct = {
        name: document.getElementById('pName').value,
        category: document.getElementById('pCategory').value,
        price: parseFloat(document.getElementById('pPrice').value),
        description: document.getElementById('pDesc').value,
        image: document.getElementById('pImage').value
    };

    try {
        // Insert into Supabase table named 'products'
        const { data, error } = await supabase
            .from('products')
            .insert([newProduct]);

        if (error) {
            console.error(error);
            alert("Error saving product: " + error.message);
        } else {
            alert("Success! Product has been added to the main store.");
            document.getElementById('addProductForm').reset();
        }
    } catch (err) {
        alert("An unexpected error occurred.");
        console.error(err);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-feather="save"></i> Publish Product to Store`;
        feather.replace();
    }
});
