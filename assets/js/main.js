const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    const fetched = fetch('https://646c7c157b42c06c3b2b57be.mockapi.io/BizPro', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name: document.querySelector('#full_name').value,
            image: document.querySelector('#img_url').value,
        })
    })
    fetched.then(res => {
        (res.ok == true)
        {
            document.querySelector('#full_name').value = '',
                document.querySelector('#img_url').value = ''
        }
    }).catch(err => console.log(err))
})