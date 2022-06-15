import * as S from "./styles";
const xx =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUVFRUVFxgVFxUVFRUVFRUWFhUVFRgYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tKy0rLS0tLS0rLS0tLS0tLSstLS0tLS0tLS0rLS0tLSstLS0tKy0tLSstLS03LS0tK//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADcQAAEDAgQEAwYFBAMBAAAAAAEAAhEDIQQSMUEFUWFxIoGRBjKhscHwEyNC0eEUUmKCFTOScv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgMBAQACAgMAAAAAAAABAhEDITFBEgQiUWETMkL/2gAMAwEAAhEDEQA/APlJ1PcqIHU9youV6kRRQKIMUUAnKCKRCHZEFSUgEKAJioCmCwgrErygFRRhFA2AQKcIBBJKl0wbKcsjU+l1UlqbnJ6quotApghJUpx25p/ipnLjVMqJy2EIUrllKSgU6iRkhKVY4KtyYIVXCsQCE1SW7DdemwrQKZNWc3haGgCD3Xm3i67zSIyZnEkg856K5frDknamvFwMwE2B+KahRJygXnyg9Vvx2DIDXOiHAw0XykbFAUGmmxopkVLuLpkFu0jZK496L99Oa5hky64MffRLiKGWRMwdRpHQq59UtbkMRIPVUvMts7QkBvIHdJpNshBA11UNEZSZuCPQqx7BlBkTJEbhIKduScovaNeALjML73B2KfDUpHmqfwxFjebjorcO63mqZkOp7oqO1KiydcBFRxRBQAhG6JKIQCFS6aExS2C5UciEqFMAQoQjCEICIpQE0IIYSudCqrVQDCrLhofrda4Yfa5uTl+RrFaJ+iq/qB8+yozXt8VKThN4H0WzmvbQaoGpuna8EFZa1EHSZQYYGUkzKA2076H1VmTssH4kHVPTrDRKyU5lZ40EKSlzImFz5YadnHyTJCVU8piUrkmpGowoihKupsu3VrxlcyYEQSLyuI/ULsYGoGuaXjMGmcvOyqIzjRjcS94Dqk3uCPnAVdMNh01HDw+EjfoU1Yl5c9rYaDAvp0VYrs/CLHNOeRlO0bylbWcnShtMOFjoJMn5IOpt2cTI7QeSes8FrQDoN+e6otA5pNSHsplabZot8eSvOXcSSPQqmmByvOp0unCvcUlkQnoaeasrNAdEyeivwz2ge6DffVXGe2Qtue5QyK06+qCw261YbzRanIQCNhIQhMVEEUhAJlEwBajCKiQKiQigmSKnEVIHdXFczFVZK1wx3WPLn+YV1QHZI56VQA8l0ONcAN0jnKNN1HC6AspnqmdUE3S0mlWNwjnGwSvR6VMdJN+07qx1MiJ0N+/mt7OButG6yYrCvZZ2g0S3DuNh6bxpdW0pvIiN1zabrrSys4uFv57osKWzuNBQIRoiWj0RIXNZqvQxu4WFIRUQrSp3vBdip4oIGjbxfz6LkE3XWp4stkMEBwgjWQhjnL8BtcRluRqQdCeiXF1Wl0sblGoBv5JXtIAvrdI5sbo2JIXMpTZOphW0yGukw4QfiqxUsWxv5hCigwecc94Uc6Sbd40TfhkXIslf6SmmhVfoAAIGo37pKYJ9VG1MpB5I03a9yqRrSwi5Swi7VBYOpFFEAgCooomEUQQJQRiogUJT0DKKKJaCnFuhpXJOnVdDiJsOS57BcDmurin9XFz3+zrcHwEjOfL91063DA7RW4RuVjR0W6mVnlldtMMZpwTwUq1nBBE3XoWOVjGhL91f/FHFwnCQOy6+GwTRFloBAV1NK5VWOEaMPgm6keSx8b4c1491dWhU8OqV6arHzLjGCNJ2mt1gp1S08l7r2pwgcJtZeGqN8UfYW2F3HFyY6roUjYHnM9Cmes2FG09e0LS9Zck7dHBeihBEFFxWbdSdQug11wBpoJ+a579VtYNE2eToVcNlc7xh4aB4gLXWGobxrGnIp3OgETqLrRjOEVabQ54AzNDxce6dPNDPG69rE4zsEQG5Trmm3KFWE34Zv0Q0X0aDnAAEmdh0VWIoZTHzV39UQxrWugCT1zRqCqBeST63TZ/22zOanYJ6KVBA11Qp79/oFUFWOFz5oAJzqe6CxdIQgAmQSAKIqJgCgmQTIAEVEqAZRRRMmfHU5b2usGH94TzC6zmyubVoOa7S02W3Hl8c3Ph3uPU0B4R2C2UxZYqThlB2V9LGN6/FZ1ePTVTlWgnkq6NdpVuUKW0EHor2HoVU1oVzKzRqUHG3Dt7p3LP/AMhTjqmZiWu93zTL1h403wyvn2Ld43Dr9NV9E4s4ZOpsOv3deIp4IvLyNGzJ3t/C148unNzY25ajHgnQTPay2ucqsNRAE7qxwU8l3V8OGoCBKKUlQ22qcfEFsYVhefEFumQITsZ2r6NIuJAFwJ8krq7tCSQLAEkx26INkXBTPpHLOWBpKRdb7VAq59QZGgC4sTzCXDtaXDMSG84lBzgZTOoxwggjt3Sh0Ai190abmgGdduiQgwgX0lZkAXBS0RZRzShTKaa0kXPcpSo7UoFZOkJRQRQSQopKBQBQUlBBCEUrUSqJFEEAboBkW05I5C/wQWzBMsT5Jz1OXi2i7KYcJG20Hrqmfimixdf72TNZIiEj8M0iHNnknuMtXSyniAbi4+7rdTxAht2nMCYBlzbkQ4bG09iFznsECbQIEK3CUjOUCJgkkDMOUHZK2LxljXVrtFr+n8rI3ENJvbutOJo55jNMTBAtGo7LmuwTHaknzISmhlu11KLW62I3iPvVaaNZjW5s35mYtyBpMsLZz5u8iPNc6macBobJiLSIjqtlPAANJI1B1PTbknbFYytFOnmLnm4ALRyn9UfL1XMo4BzG1KjoDS155fpIA72XdoNAaANIScSA/Bqg/wBhS2uT68O1BzkxKrKdTjNRCkRJQJQVUOPiW2k7wnusO66GHga3keiu+Mr6egL3MBa/+QeKbqIjI52a4vIjQ+SoLSDe+/kkqXMqdn+Zl6soU5J8QAAmT8lSpOyYUHOBLRIaJJG3dJXndI089ExgNlrjM6dEmVSx5ynCpagIspR080rgVKY+aqJtXOFygmOp7oELB0lKAKJU2TBSFCoBKIb0TJCUCUShlQAlNCgCKAVQJlEyLmW/BO8PmsIC2YA+8EQsvHRw0bq58Hb6rE0wqsRi4sBcpol1G57ALkeoV+CZeTqfsBcvDtjxOuV1MJWSsXjdulj2OaRUZsACOYXMdh2P8Qi+w278l0m8QaPeN4sP4XC4hUH4ji3wg7D6oVem+iA3ZdB7gWiN9egXnaONAsQuhRxM6JeCZbdFtRYuPn8kxzb89E1OpdY+O1Py45uHwkpRVvTzryq3KxwVblaPhUCig/RNChguO66GHcc230XPaFsaTsrvjK+r85JJt15JZ6pC8lX1A22WfdvPNRVTokq9jwGQ1zgTZ3IjZLhaMkn9LRJ2MdEtOpBdl0Ii/JEO6vSucpsqnP3KabJSQmKjtrqUjZI90nkmp791SLWh2qCZ2qUBYOsEIRUlBAgUUpcmSEoZksqJ6Bw9EJGMJ0BPa61U8G8/pjvATmFvicspPqkqLezhR3cPISrWcNZu53w/ZaTgzvxlefCfXLCvwj4K6lPAU23gu/8AqEzy2IDdtgtJ/Hv2s8v5GPwjmSJ9VlfhpdHNX0zFiraQuua7l01xu3Na97KoYTLDoTt0XQNAkSJ/1vHkVMbQzAHcK5pBu5okiCQblXua7H5y3uKKFEz+o/6wqOK1gIhvitvJMi1gt9KgzfOe73R21WnCYOm24bf5Dpz7pf1O45PNsouIl3oulg2QtWLpgvsItJSUm3UWnI1MMLNxTBVajWljC4AmYiZ7dlootLiANSV08LULHmnBMGdhYgc10cHD+734jm5vzNR4WtSLTDgQeRsqnBfUKlFr2/mMB6EBy5eJ9l6FQWBpn/H6tK2y/h5T/rWeP8qfY8AkevSYz2Tqj/rLXjvlPobfFcXGYCrT/wCym5vUi3qLLny4s8fY0nJjfK57NVqBCzM181c3ZNNXAclY5wtbZLA2PkgCs1RYNNbqtyYGyEJLIO6rjkri5VF23PVUmqyVYxvVCs5sCBtfqUtP6qmbadT3QKJ1QWDsAoFFAoiaRzkhKvoYdz9Bbnsulh8I1l9TzP0W+HHcmPJzY4dfWChgXOufCOv7LdSwLBqM3f8AZXvdFyjS0ldGPFjHJlzZ5GaI0EDomCCIWzI2fZPE9FWWqykUyQ2sdCqnagdZ9Bb4wtNRshZa5iDyMHsUUKqzd0zXK14Wc+H6Lk5+P/1HRxZ/K1U3Sn/pg5Zmv3HmrqeJC59OrHL/ACvp8Pb1W1jICwNx4THFl2nqjStz4lYyVVlRJXRwGCNnEdh9Sr4+O53URlnMZtr4bhMgzH3j8ByWXGmcRb+xs95MD5Lp1H7Bc6iIqPeb3gdToB5L1JjMcZjHn5ZXK7rp4ateDr8lsdC5dFmXxO1K0isYWkqV5aOvxUNJpEbdbj4qprkwensnJx3slh6kloyE/wBlh/50XneI+zFWlcfmNH9o8Q7t/Ze8Y9OXBZZ8GGX+lzkyj5O0ATM8lUF7z2g9nW1QX0/C/wBA7vyPVeFxDS1xa5pBFiOq4eTiuF7dOGcpgUWlUkqLDTeU5hJUbBhSJVld06CE9JtZypT37qEJ6Oh7qktjvqgUTv3Syud2AVqweEzeJ3u8uf8ACOEws3dpy5/wuiunh4d91x83NrrFMtoFkganCgC7NOOsuIMuDfVagFiwvicSujTZNgpxBAEx0VwoxqVY2k3cytNFtlYrGC6vdhgfdPqq6uGcNvRGqQlwWfERHQ2P7ouaVANilTJTJgSi5krPScQ4tO2nUK8FSao0SLtuqKtVujhB9FtfVAEn76LzuKouNQvfJaeVo5DyWHJxY/GuHLZ1XUZWpjYk9TKup40OcGgiSYAndYKdLDxJD3dnED4rNRwgcS4mGky0bjkbbrLHj21y5dePdcN4cG+J9ztyC6eey81wvjhZFOtpo1+p/wBx9V6IEESCCDoRcFejxfmTWLlytt3VJO/mq6LY8RifgOgTYkQ3uY+qqY4bqyX5puU1J4J6KprC7Ww5c+6vA5aII7nKB6Up2MTJYCoHJSkaU9mtwlWQZ2JHouV7R8BFYZm2qAWPP/F37rVwur73c/NaTVMypsmWOqJbL0+XVaBYS1wIIsQUKYvde89oOFNrNmwePddz/wAXdPkvC1KRYS1wIIMEHULzuXjuFdnHnMoQjVRycieXNJKyaEKaibabpSU1I2VROTU7dXYWhNzoPiVFFnxSXLtrz5XHDp0KTpViKi9CePOApm0S4GPM8lFE4GbB0o0XVwUaKKJ4FV9ehKyvYRZRRaZQASVYzEEKKKN6JYHtOojslq4ORLTKiiqdhifQJIJEEc/l8laaECXGwRUU6NmruYRAYXHYmRCwY+qGsOZtzYXm5UUWeRs3CcHnhsXM+S6GSzcrMvhHiOpteFFFGK8vIuYxoH2SuvwqmWjwkwb309FFFth6zacZVLsrQL3kd4uraGHy3dcqKLbRLwCmhRRMC0J3lRRMiJKhgE8rqKJU2LhZMFbHv5CY15woolj4ZmiR0Xn+PcL/ABGlzR+Y0f8Ato27hBRTySXHs8bq7jyQN9EXj43RUXmX12qXJ8OLHugoqnhV/9k=";
const UserPublish = () => {
    return (
        <S.TelaCinza>
            <S.Container>
                <S.Left>
                    <S.ImageUser>
                        <img src={xx} alt="carequinha" />
                    </S.ImageUser>
                </S.Left>
                <S.Right>
                    <S.Forms></S.Forms>
                    <S.teste>
                        <button className="PublishButton">Publish</button>
                    </S.teste>
                </S.Right>
            </S.Container>
        </S.TelaCinza>
    );
};
export default UserPublish;
