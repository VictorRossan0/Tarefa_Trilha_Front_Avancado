import React from 'react';

function PaginacaoTarefas({ paginaAtual, totalPaginas, setPaginaAtual }) {
    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const paginas = [];
    for (let i = 1; i <= totalPaginas; i++) {
        paginas.push(
            <li key={i} className={`page-item ${paginaAtual === i ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setPaginaAtual(i)}>{i}</button>
            </li>
        );
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${paginaAtual === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={paginaAnterior}>Anterior</button>
                </li>
                {paginas}
                <li className={`page-item ${paginaAtual === totalPaginas ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={proximaPagina}>Próxima</button>
                </li>
            </ul>
        </nav>
    );
}

export default PaginacaoTarefas;
