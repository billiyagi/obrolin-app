/* global describe, it, cy, beforeEach */

/**
 * Skenario Pengujian Create Thread:
 * 1. Menampilkan alert ketika semua field thread kosong saat submit.
 * 2. Membuat thread baru ketika semua field diisi dengan benar.
 */

describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('https://forum-api.dicoding.dev/v1/**').as('apiCall')
    cy.visit('http://localhost:5173/')
  })

  it('Should display alert when data thread is empty', () => {
    // tunggu auth me API selesai
    cy.wait('@apiCall', { timeout: 20000 })

    // mengisi credential
    cy.get('input[type="Email"]').type('asdffa@gmail.com')
    cy.get('input[type="Password"]').type('root1233')

    // klik tombol login
    cy.get('button').contains(/^Login$/).click()

    // tunggu login API selesai
    cy.wait('@apiCall', { timeout: 20000 })

    // memverifikasi apakah dapat muncul halaman home
    cy.get('header').should('be.visible')

    // memverifikasi apakah muncul tombol logout
    cy.get('a[data-testid="create-thread-button"]').click()

    // submit ngobrol
    cy.get('button[type="submit"]').click()

    // tunggu validasi/response jika ada API
    cy.wait('@apiCall', { timeout: 20000 })

    // memverifikasi apakah alert muncul ketika mengisi konten tanpa data
    cy.get('p[data-testid="title-thread"]').should('be.visible').and('have.text', 'Judul wajib diisi')
    cy.get('p[data-testid="category-thread"]').should('be.visible').and('have.text', 'Kategori wajib diisi')
    cy.get('p[data-testid="body-thread"]').should('be.visible').and('have.text', 'Isi obrolan wajib diisi')
  })

  it('Create Thread when all data needed is filled', () => {
    // tunggu auth me API selesai
    cy.wait('@apiCall', { timeout: 20000 })

    // mengisi credential
    cy.get('input[type="Email"]').type('asdffa@gmail.com')
    cy.get('input[type="Password"]').type('root1233')

    // klik tombol login
    cy.get('button').contains(/^Login$/).click()

    // tunggu login API selesai
    cy.wait('@apiCall', { timeout: 20000 })

    // memverifikasi apakah dapat muncul halaman home
    cy.get('header').should('be.visible')

    // memverifikasi apakah muncul tombol logout
    cy.get('button[data-testid="logout-button"]').should('be.visible')

    // klik ke halaman tambah thread
    cy.get('a[data-testid="create-thread-button"]').click()

    // Mengisi obrolan
    cy.get('input[id="title"]').type('Halo testing ngobrol')
    cy.get('input[id="category"]').type('cypress')
    cy.get('textarea[id="body"]').type('Automated testing using cypress is easy as it gets!')

    // submit ngobrol
    cy.get('button[type="submit"]').click()

    // tunggu API create thread selesai
    cy.wait('@apiCall', { timeout: 20000 })

    // memverifikasi apakah alert muncul ketika thread berhasil disimpan
    cy.get('div[id="swal2-html-container"]').should('be.visible').and('have.text', 'Thread Successfully Created')
  })
})
