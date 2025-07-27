/* global describe, it, cy, beforeEach */

/**
 * Skenario Pengujian Login:
 * 1. Menampilkan halaman login dengan field email, password, dan tombol login.
 * 2. Menampilkan alert ketika email kosong.
 * 3. Menampilkan alert ketika password kosong.
 * 4. Menampilkan alert ketika kredensial salah.
 * 5. Menampilkan halaman home ketika kredensial benar.
 */

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[type="Email"]').should('be.visible')
    cy.get('input[type="Password"]').should('be.visible')
    cy.get('button[type="submit"]').contains(/^Login$/).should('be.visible')
  })

  it('should display alert when email is empty', () => {
    // klik tombol login tanpa mengisi email
    cy.get('button').contains(/^Login$/).click()

    // memverifikasi apakah alert muncul untuk email
    cy.get('p[data-testid="alert-email"]').should('be.visible').and('have.text', 'Email wajib diisi')
  })

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[type="Email"]').type('billy72@gmail.com')

    // klik tombol login tanpa mengisi email
    cy.get('button').contains(/^Login$/).click()

    // memverifikasi apakah alert muncul untuk email
    cy.get('p[data-testid="alert-password"]').should('be.visible').and('have.text', 'Password wajib diisi')
  })

  it('should display alert when the credential is wrong', () => {
    // mengisi email
    cy.get('input[type="Email"]').type('billy72@gmail.com')
    cy.get('input[type="Password"]').type('password')

    // klik tombol login tanpa mengisi email
    cy.get('button').contains(/^Login$/).click()

    // memverifikasi apakah alert muncul untuk email
    cy.get('div[id="swal2-html-container"]').should('be.visible').and('have.text', 'email or password is wrong')
  })

  it('should display homepage when username and password are correct', () => {
    // mengisi credential
    cy.get('input[type="Email"]').type('asdffa@gmail.com')
    cy.get('input[type="Password"]').type('root1233')

    // klik tombol login
    cy.get('button').contains(/^Login$/).click()

    // memverifikasi apakah dapat muncul halaman home
    cy.get('header').should('be.visible')

    // memverifikasi apakah muncul tombol logout
    cy.get('button[data-testid="logout-button"]').should('be.visible')
  })
})
