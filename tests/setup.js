import { expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

// extend matcher jest-dom ke expect Vitest
expect.extend(matchers)
